export function logApp() {
  console.log();
  console.log('   App running');
  console.log(`   mode: ${process.env.APP_MODE}`);
  console.log(`   port: ${process.env.APP_PORT}`);
}
