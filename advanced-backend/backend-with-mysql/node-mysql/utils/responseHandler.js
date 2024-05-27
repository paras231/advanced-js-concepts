


export function responseJson(res,statusCode ,message,data){
     const response =  res.json({
         status:statusCode,
         message:message,
         data:data
     });
     return response;
}