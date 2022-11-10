import axios from "axios";
const API_URL = "http://localhost:8080/api/email";

class EmailService {
  email(email) {
    return axios.post(API_URL, { email });
  }
}
export default new EmailService();
