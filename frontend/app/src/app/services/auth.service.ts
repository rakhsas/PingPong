import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    URL : string;
    constructor(
        private http: HttpClient
    )
    {
        this.URL = environment.apiURL + 'auth/google';
    }

    signWithGoogle(){
        window.location.href = this.URL;
    }

    signWithGithub() {
        window.location.href = environment.apiURL + 'auth/github';
    }
    
}