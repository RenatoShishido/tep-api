import { StudentRepository } from '../domain/ports/StudentRepository';
import { BaseController } from './BaseController';
import * as express from 'express'

export default class StudentController extends BaseController{

    private studentRepository: StudentRepository;

    constructor (studentRepository: StudentRepository) {
        super();
        this.studentRepository = studentRepository;
    }
  
    protected async executeImpl (req: express.Request, res: express.Response): Promise<void | any> {
      try {
        const { username, password, email } = req.body;
        const usernameOrError: Result<Username> = Username.create(username);
        const passwordOrError: Result<Password> = Password.create(password);
        const emailOrError: Result<Email> = Email.create(email);
  
        const result = Result.combine([ 
          usernameOrError, passwordOrError, emailOrError 
        ]);
  
        if (result.isFailure) {
          // Send back a 400 client error
          return this.clientError(res, result.error);
        }
  
        // ... continue
        const userOrError: Result<User> = User.create({
          username: usernameOrError.getValue(),
          password: passwordOrError.getValue(),
          email: emailOrError.getValue()
        });
  
        if (userOrError.isFailure) {
          // Send back a 400 client error
          return this.clientError(res, result.error);
        }
  
        const user: User = userOrError.getValue();
  
        // Create the user
        await this.userRepo.createUser(user);
  
        // Return a 200
        return this.ok<any>(res);
  
      } catch (err) {
        return this.fail(res, err.toString())
      }
    }

}