'use client'

import { useState } from 'react'
import { Bell, Mail, User } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewProjectFormComponent } from './new-project-form';

export function DashboardComponent() {
  const [isAddNewOpen, setIsAddNewOpen] = useState(false)
  const [newItemType, setNewItemType] = useState('')
  const [newItemContent, setNewItemContent] = useState('')

  const handleAddNew = (type) => {
    setNewItemType(type)
    setIsAddNewOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`New ${newItemType} added:`, newItemContent)
    setIsAddNewOpen(false)
    setNewItemContent('')
  }

  return (
    (<>
      <div className='flex justify-end space-x-2 mb-4'>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">All Notifications</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="space-y-2">
                  <p className="text-sm">Notification 1</p>
                  <p className="text-sm">Notification 2</p>
                </div>
              </TabsContent>
              <TabsContent value="unread">
                <div className="space-y-2">
                  <p className="text-sm">Unread Notification 1</p>
                </div>
              </TabsContent>
            </Tabs>
            <Button className="w-full mt-2" onClick={() => handleAddNew('notification')}>Add New</Button>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Tabs defaultValue="inbox" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="inbox">Inbox</TabsTrigger>
                <TabsTrigger value="sent">Sent</TabsTrigger>
              </TabsList>
              <TabsContent value="inbox">
                <div className="space-y-2">
                  <p className="text-sm">Inbox Mail 1</p>
                  <p className="text-sm">Inbox Mail 2</p>
                </div>
              </TabsContent>
              <TabsContent value="sent">
                <div className="space-y-2">
                  <p className="text-sm">Sent Mail 1</p>
                </div>
              </TabsContent>
            </Tabs>
            <Button className="w-full mt-2" onClick={() => handleAddNew('mail')}>Add New</Button>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" >
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm">Nguyễn Văn A</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm">john.doe@example.com</p>
              <NewProjectFormComponent />
              <Button className="w-full" variant="outline">Edit Profile</Button>
              <Button className="w-full" variant="outline">Logout</Button>
            </div>
          </PopoverContent>
        </Popover>

      </div>
      {isAddNewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Add New {newItemType}</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder={`Enter new ${newItemType}`}
                value={newItemContent}
                onChange={(e) => setNewItemContent(e.target.value)}
                className="mb-4" />
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddNewOpen(false)}>Cancel</Button>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>)
  );
}