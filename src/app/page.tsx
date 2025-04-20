import Image from "next/image";
import styles from "./page.module.css";
import Dropdown from "../components/Dropdown";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>CBA travel planner</h1>
          <p className={styles.description}>
            Plan your travel with us. We will help you to plan your travel
            with the best options available.
          </p>
          <br />
          <h2>Select Your Preferences</h2>
          
          <div className={styles.twoColumnLayout}>            
            <div className={styles.column}>
              <div className={styles.textInputContainer}>
                <label htmlFor="name">From Location</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter from location" 
                  className={styles.textInput}
                />
              </div>
              <div className={styles.textInputContainer}>
                <label htmlFor="name">To where</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter To location" 
                  className={styles.textInput}
                />
              </div>
              <div className={styles.textInputContainer}>
                <label htmlFor="name">Number of days</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter of days" 
                  className={styles.textInput}
                />
              </div>
              
              <div className={styles.textInputContainer}>
                <label htmlFor="email">Number of people</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter number of people" 
                  className={styles.textInput}
                />
              </div>
            </div>
            <div className={styles.column}>
              <Dropdown 
                label="Type of Hotel" 
                options={["5 star", "4 star", "3 star", "2 star", "Hostel", "Service Apartment"]} 
                defaultOption="5 star"
              />
              <Dropdown 
                label="Type of Flight Ticket" 
                options={["Business class", "Premium", "Premium economy", "Economy"]} 
                defaultOption="Business class"
              />
              <Dropdown 
                label="Type of place" 
                options={["Beach", "Mountain", "Hidden falls", "Clubbing", "Back wates", "Sports", "Adventure"]}
                defaultOption="Beach" 
              />
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
