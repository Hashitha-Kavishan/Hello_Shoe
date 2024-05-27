package lk.ijse.gdse.springboot.back_end.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lk.ijse.gdse.springboot.back_end.service.JwtService;
import lk.ijse.gdse.springboot.back_end.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Configuration
@RequiredArgsConstructor
public class JwtConfigurationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization"); // get the value of the Authorization header

        // validate Authorization header
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            String jwt = authorizationHeader.substring(7); // extract the JWT token from the Authorization header
            String extractedUserName = jwtService.extractUserName(jwt); //extract the username from the JWT

            // check if username extracted from JWT is not null and there is no existing authenticated user in the security context
            if(extractedUserName != null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails = userService.userDetailService().loadUserByUsername(extractedUserName); //get the UserDetails corresponding to the extracted username from user table in db

                // checks if the JWT token is valid for the extracted user details
                if(jwtService.isTokenValid(jwt,userDetails)){
                    // create auth token and sets it in the security context indicating that the user represented by the token is authenticated
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }

        filterChain.doFilter(request,response);
    }
}
