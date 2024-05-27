package lk.ijse.gdse.springboot.back_end.service.exception;

public class NotFoundException extends ServiceException{
    public NotFoundException(String message){
        super(message);
    }
}
