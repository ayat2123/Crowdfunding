import LoginNavbar from "./login/component/shared/LoginNavbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginNavbar />
      <main>{children}</main>
    </>
  );
} 