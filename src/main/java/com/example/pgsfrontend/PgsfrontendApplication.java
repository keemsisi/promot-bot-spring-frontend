package com.example.pgsfrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.Description;

@SpringBootApplication
@Description(value = "Enable navgation using the the browser navigation arrows")
@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
public class PgsfrontendApplication {
	public static void main(String[] args) {
		SpringApplication.run(PgsfrontendApplication.class, args);
	}
}
