from django.shortcuts import render
from firebase_admin import firestore

def test_firestore_connection():
    try:
        # Initialize Firestore client
        db = firestore.client()
        
        # Create a test document
        test_doc_ref = db.collection("test_collection").document("test_doc")
        test_doc_ref.set({"test_field": "Hello, Firebase!"})
        
        # Read back the test document
        doc = test_doc_ref.get()
        if doc.exists:
            print("Successfully connected to Firestore:", doc.to_dict())
        else:
            print("Failed to retrieve test document from Firestore.")
    
    except Exception as e:
        print("Error connecting to Firestore:", e)

# Run the test function
