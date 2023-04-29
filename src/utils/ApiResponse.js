const ApiResponse= {
    createResponse(statusCode= 500, body={}, headers= {}){
        return {
                    statusCode,
                    headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    ...headers
                    },
                    body: JSON.stringify(body),
                };
    },
    ok(data= {}, headers= {}){
        return this.createResponse(200, data, headers);
    },
    notFound(data= {}, headers= {}){
        return this.createResponse(404, data, headers);

    },
    badRequest(data= {}, headers= {}){
        return this.createResponse(400, data, headers);
    }
};

module.exports= ApiResponse;