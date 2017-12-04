package com.prj.web.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/*")
public class HomeController {

	@RequestMapping("index")
	public String index() {
		return "home.index";
	}
	
	@RequestMapping(value="login", method=RequestMethod.GET)
	public String login() {
		return "home.login";
	}
	
	@RequestMapping("accessDeny")
	public String accessDeny() {
		return "home.accessDeny";
	}
	
/*
	@RequestMapping("upload")
	@ResponseBody
	public String upload(String title, MultipartFile file, HttpServletRequest request) throws IOException {

		System.out.println(title);
		System.out.println(file.getOriginalFilename());

		ServletContext ctx = request.getServletContext();
		String path = ctx.getRealPath("/resource/upload");

		path += File.separator + file.getOriginalFilename();
		File f2 = new File(path);

		InputStream fis = file.getInputStream();
		OutputStream fos = new FileOutputStream(f2);

		byte[] buf = new byte[1024];

		int size = 0;
		while ((size = fis.read(buf)) > 0)
			fos.write(buf, 0, size);

		System.out.println(path);
		fos.close();
		fis.close();

		return title;

	}
	
	@RequestMapping("file-list")
	@ResponseBody
	public String fileList(HttpServletRequest request){
		
		ServletContext ctx = request.getServletContext();
		String path = ctx.getRealPath("/resource/upload");
		
		StringBuilder json = new StringBuilder();
		json.append("[");
		
		File folder = new File(path);
		
		if(folder.isDirectory()) {
			int i;
			File[] files = folder.listFiles();
			
			for(i = 0; i<files.length; i++) {
				json.append(String.format("\"%s\"", files[i].getName()));
				if(i+1 < files.length)
					json.append(",");
			}
		}
		
		json.append("]");
		
		System.out.println(json);
		
		return json.toString();
	}*/
}
