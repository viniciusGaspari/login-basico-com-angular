import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // ✅ importa o serviço

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  allowedDomains: string[] = ['gmail.com', 'outlook.com', 'hotmail.com'];

  constructor(private router: Router, private authService: AuthService) {}
  showPassword: boolean = false;

  togglePassword() { this.showPassword = !this.showPassword; }

  onSubmit(event: Event) {
    event.preventDefault();
    this.errorMessage = '';

    if (!this.email) {
      this.errorMessage = "O campo de e-mail é obrigatório.";
      return;
    }

    const domain = this.email.split('@')[1];
    if (!domain || !this.allowedDomains.includes(domain)) {
      this.errorMessage = "O e-mail deve ser @gmail.com, @outlook.com ou @hotmail.com.";
      return;
    }

    if (!this.password) {
      this.errorMessage = "O campo de senha é obrigatório.";
      return;
    }

    if(this.password.length < 6) {  
      this.errorMessage = "A senha deve ter pelo menos 6 caracteres.";
      return;
    } 

    // ✅ usa o AuthService para simular login
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/boas-vindas']);
    } else {
      this.errorMessage = "Login inválido.";
    }
  }
}
