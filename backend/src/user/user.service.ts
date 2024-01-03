import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create.user";

export class UserService {
	constructor (
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {
	}


	/**
	 * this is function is used to create User in User Entity.
	 * @param createUserDto this will type of createUserDto in which
	 * we have defined what are the keys we are expecting from body
	 * @returns promise of user
	*/
   	async createUser(createUser: CreateUserDto): Promise<User> {
		const user: User = new User();
		user.name = createUser.name;
		user.username = createUser.username;
		user.email = createUser.email;
		user.password = createUser.password;
		user.gender = createUser.gender;
		user.name = createUser.name;
		return this.userRepository.save(user);
	}
	
	/**
	 * this functions is used to find all users from User Entity.
	*/
	findAllUsers(): Promise<User[]> {
		return this.userRepository.find();
	}

	/**
	 * this function is used to find user by id from User Entity.
	*/
	viewUser(id: number): Promise<User> {
		return this.userRepository.findOne({ where: {id: id} });
	}

	/**
	 * this function is used to update user by id from User Entity.
	*/
	updateUser(
		id: number,
		updateUser: CreateUserDto
	): Promise<User> {
		return this.userRepository.save({
			id: id,
			...updateUser
		});
	}

	/**
	 * this function is used to delete user by id from User Entity.
	*/
	deleteUser(id: number): Promise<{ affected?: number }> {
		return this.userRepository.delete(id);
	}


	async findOrCreateUser(userData: Partial<User>): Promise<User> {
		const { email } = userData;
	
		// Check if the user already exists
		let user = await this.userRepository.findOne({ where: {email} });
	
		// If the user doesn't exist, create a new user
		if (!user) {
		  user = await this.userRepository.save(userData);
		}
	
		return user;
	  }
}