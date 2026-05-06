import express from 'express'

const app = express()
const Port = process.env.Port || 3000

app.get( '/' , (req, res)=>{
    res.send("Server is ready to serve you master")
});

app.get("/api/data", (req, res)=>{

    const data = [
        {
  "donors": [
    { "id": 1, "name": "Arjun Mehta", "bloodGroup": "O-", "city": "Sonipat", "phone": "9988776655", "lastDonationDate": "2025-02-01" },
    { "id": 2, "name": "Kavita Sharma", "bloodGroup": "O-", "city": "Sonipat", "phone": "8877665544", "lastDonationDate": "2025-01-15" },
    { "id": 3, "name": "Deepak Verma", "bloodGroup": "O-", "city": "Delhi", "phone": "7766554433", "lastDonationDate": "2024-12-20" },
    { "id": 4, "name": "Sunita Rao", "bloodGroup": "A+", "city": "Delhi", "phone": "6655443322", "lastDonationDate": "2024-11-10" },
    { "id": 5, "name": "Rajesh Khanna", "bloodGroup": "B+", "city": "Gurugram", "phone": "5544332211", "lastDonationDate": "2025-03-20" },
    { "id": 6, "name": "Neha Kapoor", "bloodGroup": "AB+", "city": "Hyderabad", "phone": "4433221100", "lastDonationDate": "2024-10-05" },
    { "id": 7, "name": "Sanjay Gupta", "bloodGroup": "O+", "city": "Noida", "phone": "3322110099", "lastDonationDate": "2025-03-01" },
    { "id": 8, "name": "Pooja Iyer", "bloodGroup": "B-", "city": "Gurugram", "phone": "2211009988", "lastDonationDate": "2024-09-15" },
    { "id": 9, "name": "Manish Tiwari", "bloodGroup": "A-", "city": "Delhi", "phone": "1100998877", "lastDonationDate": "2024-08-20" },
    { "id": 10, "name": "Ritu Desai", "bloodGroup": "AB-", "city": "Mumbai", "phone": "9988776600", "lastDonationDate": "2025-02-28" },
    { "id": 11, "name": "Vikram Singh", "bloodGroup": "O+", "city": "Sonipat", "phone": "8877554411", "lastDonationDate": "2024-07-10" },
    { "id": 12, "name": "Priya Nair", "bloodGroup": "A+", "city": "Sonipat", "phone": "7766443300", "lastDonationDate": "2024-06-05" }
  ],
  "requests": [
    { "id": 1, "patientName": "Ramesh Sharma", "bloodGroup": "O-", "units": 2, "hospital": "Civil Hospital", "city": "Sonipat", "phone": "9876543210", "urgency": "Critical" },
    { "id": 2, "patientName": "Priya Mehta", "bloodGroup": "A+", "units": 3, "hospital": "AIIMS", "city": "Delhi", "phone": "8765432109", "urgency": "Within 3 Days" },
    { "id": 3, "patientName": "Amit Verma", "bloodGroup": "B+", "units": 1, "hospital": "Fortis Hospital", "city": "Gurugram", "phone": "7654321098", "urgency": "Planned" },
    { "id": 4, "patientName": "Neha Gupta", "bloodGroup": "AB-", "units": 4, "hospital": "Max Hospital", "city": "Noida", "phone": "6543210987", "urgency": "Critical" },
    { "id": 5, "patientName": "Suresh Patel", "bloodGroup": "O+", "units": 2, "hospital": "Apollo Hospital", "city": "Mumbai", "phone": "5432109876", "urgency": "Within 3 Days" },
    { "id": 6, "patientName": "Anita Singh", "bloodGroup": "A-", "units": 2, "hospital": "PGI", "city": "Sonipat", "phone": "4321098765", "urgency": "Critical" },
    { "id": 7, "patientName": "Rohit Kumar", "bloodGroup": "B-", "units": 1, "hospital": "Safdarjung Hospital", "city": "Delhi", "phone": "3210987654", "urgency": "Planned" },
    { "id": 8, "patientName": "Meena Joshi", "bloodGroup": "O-", "units": 3, "hospital": "Medanta", "city": "Gurugram", "phone": "2109876543", "urgency": "Within 3 Days" }
  ]
}
    ]
 
    res.send(data)
})

app.listen( Port, ()=>{
    console.log(`Serving at http://localhost:${Port}/`)
});