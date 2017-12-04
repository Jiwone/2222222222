package com.prj.web.entity;

import java.util.Date;

public class Info {
	private int id;
	private String title;
	private String content;
	private int hit;
	private String picture;
	private String writerId;
	private Date date;
	
	public Info() {
		
	}

	public Info(int id, String title, String content, int hit, String picture, String writerId, Date date) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.hit = hit;
		this.picture = picture;
		this.writerId = writerId;
		this.date = date;
	}

	public Info(String title, String content, String writerId) {
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

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getWriterId() {
		return writerId;
	}

	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
}
