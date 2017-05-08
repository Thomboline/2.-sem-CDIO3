package dto;

import java.util.List;

public interface IUserDTO 
{
	
	public int getUserId();
	public void setUserID(int ID);
	
	public String getUsername();
	public void setUsername(String name);
	
	public String getIni();
	public void setIni(String ini);
	
	public List<String> getRoles();
	public void setRoles(String roles);
	public void addRole(String role);

	public void setUserCpr(String Cpr);
	public String getUserCpr();
	
}
