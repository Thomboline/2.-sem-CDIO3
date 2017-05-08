package dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserDTO implements Serializable, IUserDTO
{

	private static final long serialVersionUID = 4545864587995944260L;
	private int	userID;                     
	private String username, CPR, password;                
	private String ini;                 

	private List<String> roles;
	
	//TODO Add relevant fields
	
	public UserDTO(int userID, String username, String password, String ini, String CPR, String role ) {
	//	this.userId = userID;
	//	this.userName = username;
		
		
	}
	public UserDTO() 
	{
		this.roles = new ArrayList<String>();
	}

	
	public String getUsername() 
	{
		return username;
	}
	public void setUsername(String username) 
	{
		this.username = username;
	}
	public String getIni() 
	{
		return ini;
	}
	public void setIni(String ini) 
	{
		this.ini = ini;
	}

	public List<String> getRoles() 
	{
		return roles;
	}
	public void setRoles(String roles) 
	{
		this.roles.set(0, roles);
	}
	
	public void addRole(String role)
	{
		this.roles.add(role);
	}
	
	public boolean removeRole(String role)
	{
		return this.roles.remove(role);
	}

	
	public String toString() 
	{
		return "UserDTO [userID=" + userID + ", userName=" + username + ", ini =" + ini + ", roles= " + roles + "]";
	}

	public void setUserCpr(String Cpr) 
	{
		this.CPR = Cpr;
	}

	public String getUserCpr() 
	{
		return this.CPR;
	}
	
	public int getUserId() 
	{
		return this.userID;
	}

	public void setUserID(int ID) 
	{
		this.userID = ID;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
