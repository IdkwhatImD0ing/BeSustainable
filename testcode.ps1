$uri = 'http://localhost:3000/api/sustainability'
$upcCode = '073141150040' # Replace with your actual UPC code
$body = @{
    mode = 'upc'
    code = $upcCode
} | ConvertTo-Json

# Ensure the Content-Type is application/json
$headers = @{
    "Content-Type" = "application/json"
}

# Send the POST request
Invoke-RestMethod -Uri $uri -Method Post -Body $body -Headers $headers
