package com.prj.web.entity;

import java.util.Date;

public class Comment {
	private String id;
	private String content;
	private Date date;
	private String freeId;
	private String writerId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getFreeId() {
		return freeId;
	}
	public void setFreeId(String freeId) {
		this.freeId = freeId;
	}
	public String getWriterId() {
		return writerId;
	}
	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comment(String id, String content, Date date, String freeId, String writerId) {
		super();
		this.id = id;
		this.content = content;
		this.date = date;
		this.freeId = freeId;
		this.writerId = writerId;
	}
	
	
}
