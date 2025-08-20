import React, { useState } from "react";

const InformationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    authType: "local",
    googleId: "",
    Salutation: "",
    FirstName: "",
    LastName: "",
    Age__c: "",
    registrationStage: "accountCreated",
    Biceps_in_Inches__c: "",
    Chest_in_Inches__c: "",
    Height_in_Centimeters__c: "",
    BillingAddress: { street: "", city: "", state: "", postalCode: "", country: "" },
    ShippingAddress: { street: "", city: "", state: "", postalCode: "", country: "" },
    Date_of_Registration__c: "",
    Phone: "",
    Rating: "",
    Weight_in_Kilograms__c: "",
    Active__c: "Yes",
    Profile_Image__c: "",
    Display_Image_1__c: "",
    Display_Image_2__c: "",
    Display_Image_3__c: "",
    Display_Image_4__c: "",
    Display_Image_5__c: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("BillingAddress.") || name.startsWith("ShippingAddress.")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

 
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-black focus:border-black outline-none transition";

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Bouncer Information
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 🔹 Basic Info */}
          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2">
            Basic Information
          </h2>
          <input className={inputClass} name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input className={inputClass} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input className={inputClass} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />

          <select className={inputClass} name="authType" value={formData.authType} onChange={handleChange}>
            <option value="local">Local</option>
            <option value="google">Google</option>
          </select>

          <input className={inputClass} name="googleId" placeholder="Google ID" value={formData.googleId} onChange={handleChange} />
          <input className={inputClass} name="Salutation" placeholder="Salutation" value={formData.Salutation} onChange={handleChange} />
          <input className={inputClass} name="FirstName" placeholder="First Name" value={formData.FirstName} onChange={handleChange} />
          <input className={inputClass} name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handleChange} />
          <input className={inputClass} type="number" name="Age__c" placeholder="Age" value={formData.Age__c} onChange={handleChange} />

          {/* 🔹 Registration Stage */}
          <select className={inputClass} name="registrationStage" value={formData.registrationStage} onChange={handleChange}>
            <option value="accountCreated">Account Created</option>
            <option value="detailsSubmitted">Details Submitted</option>
            <option value="verificationScheduled">Verification Scheduled</option>
            <option value="verifiedMember">Verified Member</option>
          </select>

          {/* 🔹 Body Measurements */}
          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2 mt-4">
            Body Measurements
          </h2>
          <select className={inputClass} name="Biceps_in_Inches__c" value={formData.Biceps_in_Inches__c} onChange={handleChange}>
            <option value="">Select Biceps</option>
            <option>14 Inches</option>
            <option>15 Inches</option>
            <option>16 Inches</option>
            <option>Above 25 Inches</option>
          </select>

          <select className={inputClass} name="Chest_in_Inches__c" value={formData.Chest_in_Inches__c} onChange={handleChange}>
            <option value="">Select Chest</option>
            <option>40 Inches</option>
            <option>42 Inches</option>
            <option>60 Inches</option>
            <option>Above 68 Inches</option>
          </select>

          <select className={inputClass} name="Height_in_Centimeters__c" value={formData.Height_in_Centimeters__c} onChange={handleChange}>
            <option value="">Select Height</option>
            <option>173 CM</option>
            <option>180 CM</option>
            <option>190 CM</option>
            <option>Above 190 CM</option>
          </select>

          {/* 🔹 Addresses */}
          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2 mt-4">
            Billing Address
          </h2>
          <input className={inputClass} name="BillingAddress.street" placeholder="Street" value={formData.BillingAddress.street} onChange={handleChange} />
          <input className={inputClass} name="BillingAddress.city" placeholder="City" value={formData.BillingAddress.city} onChange={handleChange} />
          <input className={inputClass} name="BillingAddress.state" placeholder="State" value={formData.BillingAddress.state} onChange={handleChange} />
          <input className={inputClass} name="BillingAddress.postalCode" placeholder="Postal Code" value={formData.BillingAddress.postalCode} onChange={handleChange} />
          <input className={inputClass} name="BillingAddress.country" placeholder="Country" value={formData.BillingAddress.country} onChange={handleChange} />

          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2 mt-4">
            Shipping Address
          </h2>
          <input className={inputClass} name="ShippingAddress.street" placeholder="Street" value={formData.ShippingAddress.street} onChange={handleChange} />
          <input className={inputClass} name="ShippingAddress.city" placeholder="City" value={formData.ShippingAddress.city} onChange={handleChange} />
          <input className={inputClass} name="ShippingAddress.state" placeholder="State" value={formData.ShippingAddress.state} onChange={handleChange} />
          <input className={inputClass} name="ShippingAddress.postalCode" placeholder="Postal Code" value={formData.ShippingAddress.postalCode} onChange={handleChange} />
          <input className={inputClass} name="ShippingAddress.country" placeholder="Country" value={formData.ShippingAddress.country} onChange={handleChange} />

          {/* 🔹 Other Info */}
          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2 mt-4">
            Other Details
          </h2>
          <input className={inputClass} type="date" name="Date_of_Registration__c" value={formData.Date_of_Registration__c} onChange={handleChange} />
          <input className={inputClass} name="Phone" placeholder="Phone" value={formData.Phone} onChange={handleChange} />

          <select className={inputClass} name="Rating" value={formData.Rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option>Hot</option>
            <option>Warm</option>
            <option>Cold</option>
          </select>

          <input className={inputClass} type="number" name="Weight_in_Kilograms__c" placeholder="Weight (kg)" value={formData.Weight_in_Kilograms__c} onChange={handleChange} />

          <select className={inputClass} name="Active__c" value={formData.Active__c} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>

          {/* 🔹 Images */}
          <h2 className="col-span-2 text-xl font-semibold text-gray-700 border-b pb-2 mt-4">
            Images
          </h2>
          <input className={inputClass} name="Profile_Image__c" placeholder="Profile Image URL" value={formData.Profile_Image__c} onChange={handleChange} />
          <input className={inputClass} name="Display_Image_1__c" placeholder="Image 1" value={formData.Display_Image_1__c} onChange={handleChange} />
          <input className={inputClass} name="Display_Image_2__c" placeholder="Image 2" value={formData.Display_Image_2__c} onChange={handleChange} />
          <input className={inputClass} name="Display_Image_3__c" placeholder="Image 3" value={formData.Display_Image_3__c} onChange={handleChange} />
          <input className={inputClass} name="Display_Image_4__c" placeholder="Image 4" value={formData.Display_Image_4__c} onChange={handleChange} />
          <input className={inputClass} name="Display_Image_5__c" placeholder="Image 5" value={formData.Display_Image_5__c} onChange={handleChange} />

          <button
            type="submit"
            className="col-span-2 mt-6 bg-black hover:bg-[#3b3e3c] text-white py-3 rounded-lg font-semibold shadow-md transition"
          >
            Save Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default InformationPage;
