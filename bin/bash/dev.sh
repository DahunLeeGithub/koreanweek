source ../../backend/myvenv/bin/activate
cd ../../backend/kweekBack/
nohup python3 manage.py runserver &
cd ../../frontend/kweek
npm run dev