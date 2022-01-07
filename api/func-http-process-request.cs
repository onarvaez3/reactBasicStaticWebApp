using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;

namespace PortalFacturacion.Function
{
    public static class ProcessRequestFunc
    {
        [FunctionName("func-http-process-request")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [SendGrid(ApiKey = "SENDGRID_API_KEY", From = "narvaezo@globalhitss.com", Subject = "Nueva solicitud de factura")] IAsyncCollector<SendGridMessage> messageCollector,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            RequestData requestData = JsonConvert.DeserializeObject<RequestData>(requestBody);

            if(requestData != null && ValidateRequest(requestData))
            {
                var message = new SendGridMessage();
                message.AddTo(requestData.email_receptor);
                message.AddContent("text/html", requestBody);

                await messageCollector.AddAsync(message);

                return new OkObjectResult(null);
            }
            else
            {
                return new BadRequestObjectResult("Invalid use.");
            }
        }

        public static bool ValidateRequest(RequestData requestData)
        {
            return true;
        }
    }

    public class RequestData
    {
        public string rfc_emisor { get; set; }
        public string email_emisor { get; set; }
        public string rfc_receptor { get; set; }
        public string email_receptor { get; set; }
    }
}
