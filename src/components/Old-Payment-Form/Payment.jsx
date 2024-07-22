import { useForm } from "react-hook-form";
import Form from "./Form";
import Card from "./Card";

// import style from "../styles/Card.module.css";
import './Form.css';
import './Card.css';

const Payment = () => {
  const {
    watch,
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      cardholderName: "",
      number: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  });

  return (
    <main>
      <h1>Payment</h1>
      <Card cardData={watch()} />
      <Form {...{ handleSubmit, control, errors, register, reset }} />
    </main>
  );
}

export default Payment;