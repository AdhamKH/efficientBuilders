"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Grid } from "@mui/material";
import StanderInput from "@/components/inputs/standerInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextAreaInput from "@/components/inputs/textArea";
import SelectInput from "@/components/inputs/SelectInput/SelectInput";
import CheckBox from "@/components/inputs/checkBox";
import { companyId, mainUrl } from "@/app/lib";
import { toast } from "react-toastify";

const Hero = ({ data }: any) => {
  const methods = useForm<any>({});
  const [isLoading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    let sendData = {
      ...data,
      company_id: companyId,
    };

    fetch(`${mainUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Email has been sent");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };
  console.log("data", data[0]?.email);
  return (
    <div className={styles.contactForm}>
      <h1>Contact us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid
            container
            columns={12}
            spacing={3}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Grid item xs={12} md={6}>
              <StanderInput name="first_name" Label="First name" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <StanderInput name="last_name" Label="Last name" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <StanderInput name="email" Label="Email" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <StanderInput name="phone" Label="Phone number" required />
            </Grid>
            <Grid item xs={12}>
              <StanderInput name="subject" Label="Subject" required />
            </Grid>
            <Grid item xs={12}>
              <TextAreaInput
                name="description"
                label="Message"
                placeholder="Type your message..."
                required
              />
            </Grid>
            <Grid item xs={12}>
              <CheckBox name="accept" label="I accept the Terms" required />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <button type={"submit"}>
                {isLoading ? "sending..." : "send"}
              </button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>

      <div className={styles.contactInfo}>
        <Grid container columns={12}>
          <Grid item xs={12} md={4}>
            <div className={styles.single}>
              <svg
                width="40"
                height="33"
                viewBox="0 0 40 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 0.250977H36C38.2092 0.250977 40 2.04184 40 4.25098V28.251C40 30.4602 38.2092 32.251 36 32.251H4C1.79086 32.251 0 30.4602 0 28.251V4.25098C0 2.04184 1.79086 0.250977 4 0.250977ZM23.3 23.151L36 14.251V10.051L21.3 20.351C20.5182 20.8936 19.4818 20.8936 18.7 20.351L4 10.051V14.251L16.7 23.151C18.682 24.5364 21.318 24.5364 23.3 23.151Z"
                  fill="black"
                />
              </svg>

              <span>Email</span>
              <p>{data[0]?.email}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <div className={styles.single}>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.333 36.2506C25.0256 36.2476 21.7696 35.4302 18.853 33.8706L17.953 33.3706C11.7345 30.0272 6.63639 24.929 3.29301 18.7106L2.79301 17.8106C1.19265 14.8774 0.347269 11.5919 0.333009 8.25054V6.91054C0.332169 5.84446 0.756929 4.82213 1.51301 4.07053L4.89301 0.690535C5.22127 0.359735 5.68463 0.200295 6.14693 0.259055C6.60923 0.317815 7.01797 0.588135 7.25301 0.990535L11.753 8.71054C12.2081 9.49632 12.0767 10.4901 11.433 11.1305L7.65301 14.9106C7.33909 15.221 7.26595 15.7006 7.47301 16.0906L8.17301 17.4106C10.6871 22.0674 14.5116 25.885 19.173 28.3906L20.493 29.1106C20.883 29.3176 21.3626 29.2444 21.673 28.9306L25.453 25.1506C26.0934 24.507 27.0872 24.3756 27.873 24.8306L35.593 29.3306C35.9954 29.5656 36.2658 29.9744 36.3244 30.4366C36.3832 30.899 36.2238 31.3624 35.893 31.6906L32.513 35.0706C31.7614 35.8266 30.739 36.2514 29.673 36.2506H28.333Z"
                  fill="black"
                />
              </svg>

              <span>Phone</span>
              <p>{data[0]?.phone}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.single}>
              <svg
                width="30"
                height="41"
                viewBox="0 0 30 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6672 0.249023C6.67924 0.249023 0.180664 6.74762 0.180664 14.7354C0.180664 24.6486 13.1446 39.2016 13.6966 39.8162C14.215 40.3936 15.1202 40.3926 15.6378 39.8162C16.1896 39.2016 29.1536 24.6486 29.1536 14.7354C29.1534 6.74762 22.655 0.249023 14.6672 0.249023ZM14.6672 22.024C10.6482 22.024 7.3787 18.7544 7.3787 14.7354C7.3787 10.7165 10.6483 7.44698 14.6672 7.44698C18.686 7.44698 21.9556 10.7166 21.9556 14.7355C21.9556 18.7544 18.686 22.024 14.6672 22.024Z"
                  fill="black"
                />
              </svg>

              <span>Office</span>
              <p>123 Sample St, Sydney, NSW 2000 AU</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
