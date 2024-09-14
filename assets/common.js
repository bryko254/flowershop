// Supabase setup
const supabaseUrl = 'https://rdqaxqagqyylxvdksnzi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcWF4cWFncXl5bHh2ZGtzbnppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzkyNjk5NywiZXhwIjoyMDM5NTAyOTk3fQ.BCgpL_7mNghbz_Y7uQgVRhjjIAh5zCuwHKltD3VtZIU'; // Replace with your actual Supabase anon key
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Preloader
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 500);
});

// Form submission helper
async function submitForm(formId, callback) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await callback();
    });
}

// Authentication check
async function checkAuth(redirectUrl = 'login.html') {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (!session || error) {
        window.location.href = redirectUrl;
    }
}
