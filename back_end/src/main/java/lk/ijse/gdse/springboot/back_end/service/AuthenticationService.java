package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.auth.request.SignInRequest;
import lk.ijse.gdse.springboot.back_end.auth.request.SignUpRequest;
import lk.ijse.gdse.springboot.back_end.auth.response.JwtAuthResponse;

public interface AuthenticationService {
    JwtAuthResponse signIn(SignInRequest signInRequest);
    JwtAuthResponse signUp(SignUpRequest signUpRequest);
}
