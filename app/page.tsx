"use client";
import React, { useEffect, useState } from 'react';

interface Member {
  nama: string;
  role: string;
}

const MembersList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/names")
      .then(response => response.json())
      .then((data: Member[] | any) => {
        console.log(data); 
        if (Array.isArray(data)) {
            console.log('this is data')
          setMembers(data);
        } else {
          console.error('Invalid data structure received');

          setMembers([]);
        }
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      {members.map((member, index) => (
        <div key={index}>
          {member.nama} - {member.role}
        </div>
      ))}
    </div>
  );
};

export default MembersList;
