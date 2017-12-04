package com.prj.web.entity;

public class User {
	private String id;
	private String pw;
	private String name;
	private String nickName;
	private String phone;
	private int weight;
	private int height;
	private String role;
	
	public User() {
	}
	public User(String id, String pw, String name, String nickName, String phone, int weight, int height, String role) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.nickName = nickName;
		this.phone = phone;
		this.weight = weight;
		this.height = height;
		this.role = role;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
