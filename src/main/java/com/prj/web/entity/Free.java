package com.prj.web.entity;

import java.util.Date;

public class Free {
	private int id;
	private String title;
	private String content;
	private String writerId;
	private String hit;
	private Date date;
	
	public Free() {
	}
	
	public Free(int id, String title, String content, String writerId, String hit, Date date) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.writerId = writerId;
		this.hit = hit;
		this.date = date;
	}

	public Free(String title, String content, String writerId) {
		this.title = title;
		this.content = content;
		this.writerId = writerId;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getWriterId() {
		return writerId;
	}
	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}
	public String getHit() {
		return hit;
	}
	public void setHit(String hit) {
		this.hit = hit;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
}
