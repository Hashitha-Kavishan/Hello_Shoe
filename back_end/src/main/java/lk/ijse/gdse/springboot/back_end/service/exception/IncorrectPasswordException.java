package lk.ijse.gdse.springboot.back_end.service.exception;

public class IncorrectPasswordException extends ServiceException{
    public IncorrectPasswordException(String message) {
        super(message);
    }
}
