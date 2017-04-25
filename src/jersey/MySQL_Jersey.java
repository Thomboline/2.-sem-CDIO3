package jersey;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import dal.IUserDAO;
import dal.IUserDAO.DALException;
import dal.UserDAO;
import dto.IUserDTO;

@Path("/Users")

public class MySQL_Jersey 
{

	IUserDAO dao = new UserDAO();

	@GET

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })

	public List<IUserDTO> findAll() throws DALException 
	{
		System.out.println("findAll");
		return dao.getUserList();
	}

	@GET @Path("{id}")

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })

	public IUserDTO findById(@PathParam("id") String id) throws NumberFormatException, DALException 
	{
		System.out.println("findById " + id);
		return dao.getUser((Integer.parseInt(id)));
	}

	@POST

	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })

	public IUserDTO create(IUserDTO user) throws DALException 
	{

		System.out.println("creating wine");

		return dao.createUser(user);

	}

	@PUT @Path("{id}")

	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })

	public IUserDTO update(IUserDTO user) throws DALException 
	{
		System.out.println("Updating user: " + user.getUserName());
		dao.updateUser(user, 1);
		return user;
	}

	@DELETE @Path("{id}")

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })

	public void remove(@PathParam("id") int id) throws DALException 
	{

		dao.deleteUser(id);

	}

}