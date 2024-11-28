import RegisterForm from "@/app/components/RegisterForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const RegisterPage = () => {

  return (
    <div className="flex justify-center gap-5 h-[100vh] items-center bg-[url('/image8.png')] bg-no-repeat bg-cover object-cover">
      <Card className="w-[350px] p-5 bg-transparent">
        <CardHeader>
          <CardTitle className="text-[#274760] text-2xl text-center">
            Sign In
          </CardTitle>
        </CardHeader>
       <RegisterForm/>
      </Card>
    </div>
  );
};

export default RegisterPage;
