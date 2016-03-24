package co.sabi11.toy.resources.bean;

import javax.ws.rs.QueryParam;

public class ToyFilterBean {

	/* Access all QueryParams via getter and setter */
	private @QueryParam("queryType") String queryType;
	private @QueryParam("argument1") String argument1;
	private @QueryParam("argument2") String argument2;
	
	public String getQueryType() {
		return queryType;
	}
	public void setQueryType(String queryType) {
		this.queryType = queryType;
	}
	public String getArgument1() {
		return argument1;
	}
	public void setArgument1(String argument1) {
		this.argument1 = argument1;
	}
	public String getArgument2() {
		return argument2;
	}
	public void setArgument2(String argument2) {
		this.argument2 = argument2;
	}
}
