const nodemailer = require("nodemailer")

class EmailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,

            auth: {
                user: process.env.SMTP_USER,
                password: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Активация Аккаунта на ТЕСТОВОМ САЙТЕ: " + process.env.API_URL,
            text: "",

            html:
                `
                <div>
                      <h1>Для активации нажмите по ссылке</h1>
                      <a href="${link}">${link}</a>
                 </div>
                `
        })
    }
}

module.exports = new EmailService();