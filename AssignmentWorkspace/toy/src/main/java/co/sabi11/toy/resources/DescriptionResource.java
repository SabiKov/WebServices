package co.sabi11.toy.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/")
public class DescriptionResource {
	
	@GET
	public String toyDescription(){
		
		return "Sorry, item description is not available";
	}

}
