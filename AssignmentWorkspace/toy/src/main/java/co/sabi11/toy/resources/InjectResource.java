package co.sabi11.toy.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.MatrixParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("/inject")
@Produces(MediaType.TEXT_PLAIN)
@Consumes(MediaType.TEXT_PLAIN)
public class InjectResource {

	/* Matrix param is an alternative approach to send data. 
	 * Header Param is able to handle security details such as authentication,
	 * token, session id so on.. The cookie param is for cookie data
	 * */
	@GET
	@Path("/annotation")
	public String getParamUsingAnnotations(
			@MatrixParam("param") String matrixParam,
			@HeaderParam("authSessionID") String header,
			@CookieParam("name") String cookie) {
		
		return "Matrix Param: " + matrixParam + 
				" Header param" + header + 
				" Cookie Param: " + cookie;	
	}
	
	/* Display the absolute path of this method
	 * It can be used to print out any param path value 
	 * to find its correct path.
	 *  */
	@GET
	@Path("context")
	public String getParamsUsing(@Context UriInfo uriInfo, @Context HttpHeaders headers) {
		
		String path = uriInfo.getAbsolutePath().toString();
		String headerInfo = headers.getCookies().toString();
		return "Path: " + path + " HeaderInfo: " + headerInfo;
	}
	/* BeanParam */
}
