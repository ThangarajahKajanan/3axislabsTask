package com.attendance.server.controller;

import com.attendance.server.model.LoginRequest;
import com.attendance.server.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // allow requests from the client app
@RequestMapping("/api/auth")
public class AuthController {

    private Map<String, String> users = new HashMap<>();

    @Autowired
    private JwtUtil jwtUtil;

    // load users from users.txt file
    public AuthController() {
        try {
            Files.lines(Paths.get("src/main/resources/users.txt")).forEach(line -> {
                String[] details = line.split(":");
                if (details.length == 2) {
                    users.put(details[0].trim(), details[1].trim());
                } else {
                    System.out.println("Invalid line in users.txt: " + line);
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
 

    // validate the credentials and return JWT token
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        String storedPassword = users.get(username);  // retrieve stored password
        Map<String, String> response = new HashMap<>();

        // credentials validations
        if (storedPassword != null && storedPassword.equals(password)) {
            // generating the token
            String token = jwtUtil.generateToken(username);
            response.put("token", token); 
            response.put("message", "Login successful");
        } else {
            response.put("message", "Invalid username or password");  // set the  Error Message for wrong credentials
        }

        return response;  // return the response as JSON
    }
}