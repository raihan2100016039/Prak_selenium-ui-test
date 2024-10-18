const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('UI Testing using Selenium', function () {
    this.timeout(30000); // Set timeout for Mocha tests
    let driver;

    // Inisialisasi WebDriver sebelum menjalankan test case
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build(); // Bisa diganti dengan 'firefox' untuk Firefox
    });

    // Tutup WebDriver setelah semua test selesai
    after(async function () {
        await driver.quit();
    });

    it('should load the login page', async function () {
        await driver.get('D:/SEMESTER7777777777777777777777777777777/ppmplasprak/ujicoba/selenium-ui-test/loginPage.html'); // Ubah path sesuai lokasi file login.html
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password', async function () {
        await driver.findElement(By.id('username')).sendKeys('testuser');
        await driver.findElement(By.id('password')).sendKeys('password123');
        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');
        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('should click the login button', async function () {
        await driver.findElement(By.id('loginButton')).click();
        // Lakukan tindakan lebih lanjut, seperti validasi login (disimulasikan di sini)
        // Misal: validasi pesan error jika login gagal atau redirect halaman jika berhasil
    });
});
