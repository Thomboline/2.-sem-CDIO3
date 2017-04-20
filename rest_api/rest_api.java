package rest_api;

import java.util.List; 
import javax.ws.rs.GET; 
import javax.ws.rs.Path; 
import javax.ws.rs.Produces; 
import javax.ws.rs.core.MediaType;

import dal.IUserDAO;
import dal.UserDAO;
import dto.UserDTO;  
@Path("/UserService") 

public class rest_api 
{
	IUserDAO userDao = new UserDAO();  
	   @GET 
	   @Path("/users") 
	   @Produces(MediaType.APPLICATION_XML) 
	   
	   public List<UserDTO> getUsers()
	   { 
		   return 
	   }

}
