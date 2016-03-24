package co.sabi11.toy.exception;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import co.sabi11.toy.model.ErrorMessage;

@Provider
public class DataNotFoundExceptionMapper implements ExceptionMapper<DataNotFoundException> {

	@Override
	public Response toResponse(DataNotFoundException dnfe) {
		
		ErrorMessage errorMessage = new ErrorMessage(dnfe.getMessage(), 404, "http://sabi11.co");
		return Response.status(Status.NOT_FOUND)
				.entity(errorMessage)
				.build();
	}

}