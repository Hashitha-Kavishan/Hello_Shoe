package lk.ijse.gdse.springboot.back_end.service.exception;

public class DuplicateRecordException extends ServiceException{
    public DuplicateRecordException(String message){
        super(message);
    }
}
