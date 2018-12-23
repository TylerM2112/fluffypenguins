SELECT notification.*, mw_users.name, mw_users.picture

from notification

JOIN mw_users
ON mw_users.auto_id = notification.sender
WHERE receiver = $1;