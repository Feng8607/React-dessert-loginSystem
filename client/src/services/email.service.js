import axios from "axios";
const API_URL = "https://react-loginsystem.herokuapp.com/api/email";

class EmailService {
  email(email) {
    return axios.post(API_URL, { email });
  }
}
export default new EmailService();
