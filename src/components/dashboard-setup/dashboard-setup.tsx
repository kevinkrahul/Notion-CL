'use client';
import { AuthUser } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { z } from 'zod';

interface DashboardSetupProps {
    user: AuthUser;
    subscription: {} | null;
}


const DashboardSetup: React.FC<DashboardSetupProps> = ({
    subscription,
    user,
  }) => {
    return( 
    <Card
    className="w-[800px]
    h-screen
    sm:h-auto"
    >
       <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started.You can add
          collaborators later from the workspace settings tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
            <form onSubmit={ () => {}}>
            <div className="flex flex-col gap-4">
            
            </div>

            </form>
        </CardContent>

    </Card>
    )
};

export default DashboardSetup;