package com.prj.web.entity;

public class DramaObject {

	private int id;
	private String name;
	private String src;
	private String iframe;
	
	
	
	public DramaObject() {
		
	}



	public DramaObject(int id, String name, String src, String iframe) {
		super();
		this.id = id;
		this.name = name;
		this.src = src;
		this.iframe = iframe;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getSrc() {
		return src;
	}



	public void setSrc(String src) {
		this.src = src;
	}



	public String getIframe() {
		return iframe;
	}



	public void setIframe(String iframe) {
		this.iframe = iframe;
	}
	
	
	
	
}
