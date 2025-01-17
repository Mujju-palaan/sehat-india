"use client";
import PricingCard from '../../../component/PricingCard/PricingCard'
import Familypricing from '../../../component/PricingCard/Familypricing';
import Businesspricing from '../../../component/PricingCard/Businesspricing';
import Testimonials from '../Testimonials/Testimonials';
import styles from './styles.module.scss'

const PricingPage = () => {
  return (
    <>
      <h2 style={{ padding: "4rem 0 0 0", textAlign: "center" , color:'#50D5B1', fontFamily:'sans-serif'}}>
        Yearly Subscription
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          padding: "6rem 0 4rem 0",
        }}
      >
        <PricingCard
          title={`Basic Plan`}
          subtitle={`For individual service`}
          price={`3650`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/bIY7wefqxcgFfZKdR2`}
        />
        <Familypricing
          title={`Family Plan`}
          subtitle={`For family services (Recommended)`}
          price={`36500`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/dR68AifqxgwV00M3cp`}
        />
        <Businesspricing
          title={`Corporate Plan`}
          subtitle={`For business services`}
          price={`365000`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/00g7we1zHcgF9BmfZc`}
        />
      </div>
      {/* <div className={styles.contact_section}>
      <h2>Details</h2>
      <BillingForm />
      </div> */}

      {/* <div style={{textAlign:'center', justifyContent:'center', justifyItems:'center', flexDirection:'column',display:'flex'}}>
      
      </div>
      <CC /> */}
      <section className={styles.Testimonials}>
        <h1 style={{color:'#50D5B1', fontFamily:'sans-serif,Pangeatext'}}>We Never Stop Smiling !</h1>
        <p style={{color:'gray',fontFamily:'sans-serif,Pangeatext'}}>
          Hi and nice to meet you! This isour brave team. We work very hard to provide an awesome experience for you.
        </p>
        
        <div style={{display:'flex'}}>
        {/* <TeamMembers></TeamMembers> */}
        </div>
        
        <Testimonials></Testimonials>
      </section>

    </>
  );
};

export default PricingPage;
