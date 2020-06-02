package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = {"com.example.main.model"})
@SpringBootApplication
public class IntegratedBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntegratedBackendApplication.class, args);
	}

}
