package lk.ijse.gdse.springboot.back_end.service.exception;

public class ServiceException extends RuntimeException{
    public ServiceException(String message){
        super(message);
    }
}
