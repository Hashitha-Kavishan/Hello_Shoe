package lk.ijse.gdse.springboot.back_end.auth.response;


import lk.ijse.gdse.springboot.back_end.util.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JwtAuthResponse {
    private String token;
    private Role role;
}
